import './styles.css';
import { api } from '@appdeploy/client';

const $ = (id: string) => document.getElementById(id)!;
const button = $('test') as HTMLButtonElement;

button.onclick = async () => {
  button.disabled = true;
  $('status').textContent = 'Testing MCP…';
  try {
    const init = (await api.post('/api/mcp', { jsonrpc: '2.0', id: 1, method: 'initialize', params: { protocolVersion: '2025-11-25', capabilities: {}, clientInfo: { name: 'grill-self-test', version: '5.0.0' } } })).data;
    const tools = (await api.post('/api/mcp', { jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} })).data;
    const tool = tools?.result?.tools?.find((item: { name: string }) => item.name === 'grill');
    const ok = init?.result?.serverInfo?.name === 'grill-chat' && tool?.annotations?.readOnlyHint === true && tool?.outputSchema && tool?._meta?.ui?.visibility?.[0] === 'model';
    $('status').textContent = ok ? 'MCP endpoint ready' : 'MCP response incomplete';
    $('detail').textContent = ok ? 'GRILL discovered · noauth · model-visible · read-only · output schema present.' : 'One or more MCP compatibility checks failed.';
  } catch (error) {
    $('status').textContent = 'MCP endpoint error';
    $('detail').textContent = error instanceof Error ? error.message : 'Unexpected self-test error';
  } finally {
    button.disabled = false;
  }
};
