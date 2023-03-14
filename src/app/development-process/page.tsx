const items = [
  {
    name: 'Updating searchParams',
    slug: 'search-params',
    description: 'Update searchParams using `useRouter` and `<Link>`',
  },
];

export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-300">Ontour Development process</h1>

      <div className="grid">
        <p>This section describes the information needed to maintain a smooth and consistent development process</p>

      </div>
      <h1 className="text-xl font-medium text-gray-200">Commits</h1>
      <div className="grid">
        <p>When development on a ticket is complete, it’s time to create the commit.</p>
      </div>
      <h1 className="text-xl font-medium text-gray-400">Commit standards</h1>
      <div className="grid">
        <p>Follow this standard for commits:</p>
         <ul className="list-disc list-inside mt-2">
          <li>The first line of the commit summarizes the purpose of the commit. Include the ticket number at the beginning of the commit with the title separated by a “-” character.</li>
          <li className='group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800 mt-4 mb-4'><pre><code> Example: [title-123] - Cleaning up examples</code></pre></li>
          <li>Include more details when something needs to be clarified (as the reason why the change is necessary or more information on a particular change). In this case, leave a blank new line between the first line and the description.</li>
         </ul>
      </div>
      <h1 className="text-xl font-medium text-gray-200">Github</h1>
      <h1 className="text-xl font-medium text-gray-400">Branching</h1>
      <div className="grid">
         <p className='mb-2'>For working on a new feature, use branches with the ticket name. For example, if a developer is working on a ticket called ONTOUR-123, it will push a branch called ONTOUR-123 to Github.</p>
         <p className='mb-2'>If the ticket has multiple parts, a description can be added to the branch name, indicating what the changes include. i.e., a ticket that separates work into adding a configuration and displaying the data could be ONTOUR-123-configuration and ONTOUR-123-UI-changes, respectively.</p>
      </div>
      <h1 className="text-xl font-medium text-gray-400">Pull Requests (PRs)</h1>
      <div className="grid">
        <p>Pull requests contains the changes done to a ticket. PRs must be short if possible and do a simple change, so when reviewed, they are less prone to errors. The base branch used during the development process PRs is develop.</p>
        <h1 className="font-medium text-gray-400 mt-2">The Pull request content should include the following items:</h1>
        <ul className="list-disc list-inside mt-2">
          <li>Descriptive title of the changes included</li>
          <li>Description of the changes</li>
          <li>A screenshot or video of how the changes look is appreciated if there were UI changes.</li>
          <li>Any clarification that you know may arise in Code Review will also help</li>
        </ul>
      </div>
      <h1 className="text-xl font-medium text-gray-400">Assigning PRs</h1>
      <div className="grid">
        <p>Make sure to assign yourself to the ticket and include all the developers as reviewers.</p>
      </div>
      <h1 className="text-xl font-medium text-gray-400">Merging Pull Requests</h1>
      <div className="grid">
        <p>We are going to use the following git strategies on our Github PRs: Squash and merge. This approach will help create a cleaner git history and avoid merging code review fixes into the main branches.</p>
      </div>
      <h1 className="text-xl font-medium text-gray-400">Normal Tickets</h1>
      <div className="grid">
        <p>When merging ticket PRs, use Squash and merge. When using this strategy, review the ticket description before merging, as the names of extra commits included in the PR may appear. Make sure to remove the extra commit names that do not include anything informative about the changes (for example, something like CR Fixes, Fix typo, Test fix after a push, or Adding something I forgot) Be aware the commit created at this step will be the final one the rest of the team will see.</p>
      </div>
    </div>
  );
}
