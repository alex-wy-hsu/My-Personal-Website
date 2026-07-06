// Minimal TerminalBlock component to allow visual placement and hover testing
export class TerminalBlock{
  constructor(){
    this.el = document.createElement('div');
    this.el.className = 'terminal-block';
    this.el.innerHTML = `<pre class="terminal-content">$ echo "hello"\nhello</pre>`;
    this.el.tabIndex = 0;
  }
  render(){
    return this.el;
  }
}

window.TerminalBlock = TerminalBlock;

export default TerminalBlock;
