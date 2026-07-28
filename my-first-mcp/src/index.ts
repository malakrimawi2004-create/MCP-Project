import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import { registerAddTaskTool } from "./tools/addTask.js";
import { registerListTaskTool } from "./tools/listTask.js";
import { registerCompleteTaskTool } from "./tools/completeTask.js";

function createServer(): McpServer {
  const server = new McpServer({
    name: "my-first-mcp",
    version: "0.2.0",
  });

  registerAddTaskTool(server);
  registerListTaskTool(server);
  registerCompleteTaskTool(server);

  return server;
}

// Create the server
const server = createServer();

// Create stdio transport
const transport = new StdioServerTransport();

// Connect the server
await server.connect(transport);

console.error("my-first-mcp MCP server running on stdio");