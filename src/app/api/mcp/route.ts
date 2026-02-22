import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const SERVER_INFO = {
  name: 'techblog',
  version: '1.0.0',
  description: 'Tech Blog MCP Server - Technical articles and programming content'
};

const TOOLS = [
  {
    name: 'get_tech_posts',
    description: 'Fetch tech blog posts',
    inputSchema: {
      type: 'object',
      properties: {
        tag: { type: 'string' },
        limit: { type: 'number', default: 10 }
      }
    }
  },
  {
    name: 'search_tech_content',
    description: 'Search tech blog posts by query',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string' }
      },
      required: ['query']
    }
  },
  {
    name: 'get_tech_post',
    description: 'Get a specific tech blog post by slug',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string' }
      },
      required: ['slug']
    }
  }
];

export async function GET() {
  return NextResponse.json({
    ...SERVER_INFO,
    endpoints: { mcp: '/api/mcp' },
    availableMethods: ['initialize', 'tools/list', 'tools/call']
  });
}

async function handleMCPRequest(request: NextRequest) {
  try {
    const body = await request.json();
    const { method, params } = body;

    switch (method) {
      case 'initialize':
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          result: {
            protocolVersion: '2024-11-05',
            capabilities: { tools: {} },
            serverInfo: SERVER_INFO
          }
        });

      case 'tools/list':
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          result: { tools: TOOLS }
        });

      case 'tools/call':
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          result: {
            content: [{
              type: 'text',
              text: JSON.stringify({
                tool: params.name,
                message: 'Implement your tech blog logic here'
              })
            }]
          }
        });

      default:
        return NextResponse.json({
          jsonrpc: '2.0',
          id: body.id,
          error: { code: -32601, message: 'Method not found' }
        });
    }
  } catch (error) {
    return NextResponse.json({
      jsonrpc: '2.0',
      error: { code: -32700, message: 'Parse error' }
    }, { status: 400 });
  }
}

export { handleMCPRequest as POST };
