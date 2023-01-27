/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as Logo } from './assets/react.svg';
import { ReactComponent as GitHubLogo } from './assets/github.svg';
import InputBar from './components/InputBar';
import Todo from './components/Todo';

function App() {
  return (
    <div className="bg-gradient-to-t from-[#3A7EA4] to-[#37A5B4] h-[100vh] flex items-center justify-center">
      <div className="bg-white rounded-2xl w-full max-w-[700px] overflow-hidden mx-4">
        {/* Header */}
        <header className="bg-[#EFFAFC] p-10">
          <div className="flex gap-2 items-center justify-center">
            <Logo height="40px" />
            <h1 className="text-center text-4xl font-bold">Todo List</h1>
          </div>
          <InputBar />
        </header>
        <main>
          {/* Buttons */}
          <div className="flex justify-around">
            <div className="button button-active">All</div>
            <div className="button">non-done</div>
            <div className="button">done</div>
          </div>
          {/* Todo List */}
          <div className="min-h-[40vh] p-8 flex flex-col gap-4">
            <Todo task="drink water" />
            <Todo task="wash dishes" />
          </div>
        </main>
        {/* Footer */}
        <footer className="flex justify-between items-center p-8 border-t">
          <p className="uppercase tracking-widest text-xs">
            designed & built by
          </p>
          <div className="flex font-bold gap-3 text-base">
            <a
              href="https://github.com/terryhycheng"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubLogo height="26px" />
            </a>
            terryhycheng
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
