import { google } from 'googleapis';
import { JSDOM } from 'jsdom';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.NEXT_PUBLIC_REDIRECT_URI
);

// Function to get a new access token from a refresh token
export async function refreshAccessToken(refreshToken: string) {
  oauth2Client.setCredentials({ refresh_token: refreshToken });
  const { credentials } = await oauth2Client.refreshAccessToken();
  return credentials;
}

// Function to fetch the latest emails
export async function fetchEmails(accessToken: string, maxResults = 10) {
  oauth2Client.setCredentials({ access_token: accessToken });
  const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

  const res = await gmail.users.messages.list({
    userId: 'me',
    maxResults,
    q: 'is:inbox',
  });

  const messages = res.data.messages || [];

  return Promise.all(
    messages.map(async (message) => {
      const msg = await gmail.users.messages.get({
        userId: 'me',
        id: message.id!,
      });
      
      const subject = msg.data.payload?.headers?.find(h => h.name === 'Subject')?.value || 'No Subject';
      const sender = msg.data.payload?.headers?.find(h => h.name === 'From')?.value || 'Unknown Sender';
      const body = parseEmailBody(msg.data.payload);

      return {
        id: msg.data.id,
        snippet: msg.data.snippet,
        subject,
        sender,
        body,
      };
    })
  );
}

// Helper to parse the complex body of an email
function parseEmailBody(payload: any): string {
    if (!payload) return '';
    let bodyData = '';
  
    if (payload.body?.data) {
        bodyData = Buffer.from(payload.body.data, 'base64').toString('utf-8');
    }
  
    const mimeType = payload.mimeType;
    let parts = payload.parts;
  
    if (mimeType === 'text/plain' && bodyData) {
        return bodyData;
    }
    
    if (mimeType === 'text/html' && bodyData) {
        return convertHtmlToText(bodyData);
    }
  
    if (parts) {
        // Prefer plain text over HTML
        let plainTextPart = parts.find(part => part.mimeType === 'text/plain');
        if (plainTextPart?.body?.data) {
            return Buffer.from(plainTextPart.body.data, 'base64').toString('utf-8');
        }
  
        // Fallback to HTML
        let htmlPart = parts.find(part => part.mimeType === 'text/html');
        if (htmlPart?.body?.data) {
            const html = Buffer.from(htmlPart.body.data, 'base64').toString('utf-8');
            return convertHtmlToText(html);
        }
    }
  
    return bodyData; // Return whatever was decoded if parts are not helpful
  }

// Helper to strip HTML tags for cleaner text for Gemini
function convertHtmlToText(html: string): string {
  try {
    const dom = new JSDOM(html);
    return dom.window.document.body.textContent || '';
  } catch (error) {
    console.error('Could not parse HTML', error);
    return '';
  }
}
