export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">Ontour Technical Information</h1>

      <div className="grid">
        <p>This section intends to include the necessary technical information for site maintainers. It contains information on different aspects of the development process, technical stack</p>

      </div>
      <h1 className="text-xl font-medium text-gray-200">Repositires</h1>
      <div className="grid">
        <p><b className="text-md font-medium text-gray-200">ontour-web</b> This is the project for the application&lsquo;s front end.</p>
        <div className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800  ml-4 mt-2 mb-2 ">
        <pre className="language-html">
            <code>  
                <span>Http Url: https://github.com/git-yourdevexpert/ontour-web.git</span><br/>
                <span>SSH Url:  git@github.com:git-yourdevexpert/ontour-web.git</span>
            </code>
        </pre>
        </div>
        <p><b className="text-md font-medium text-gray-200">ontour-api</b> This includes the project for the backend of the application.</p>
        <div className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800  ml-4 mt-2 ">
        <pre className="language-html ml-4 mt-2 mb-2">
            <code>  
                <span>Http Url: https://github.com/git-yourdevexpert/ontour-api.git</span><br/>
                <span>SSH Url:  git@github.com:git-yourdevexpert/ontour-api.git</span>
            </code>
        </pre>
        </div>
      </div>
      <h1 className="text-xl font-medium text-gray-200">Tech Stack</h1>
      <div className="grid">
        <p  className="text-md font-medium text-gray-200">Web</p>
         <ul className="list-decimal list-inside mt-2 ml-2">
          <li>TReact: JS Library used to build user interfaces</li>
          <li>Nextjs: React Framework</li>
         </ul>
         <p  className="text-md font-medium text-gray-200 mt-2">Api</p>
         <ul className="list-decimal list-inside mt-2 ml-2">
          <li>Laravel: PHP Framework</li>
         </ul>
      </div>
    </div>
  );
}
