# OnTour

## Ontour Devlopment process

This section describes the information needed to maintain a smooth and consistent development process

### Commits

When development on a ticket is complete, it’s time to create the commit.

#### Commit standards
Follow this standard for commits:

● The first line of the commit summarizes the purpose of the commit. Include the ticket number at the beginning of the commit with the title separated by a “-” character.

    Example: [title-123] - Cleaning up examples

● Include more details when something needs to be clarified (as the reason why the change is necessary or more information on a particular change). In this case, leave a blank new line between the first line and the description.

### Github

##### Branching

For working on a new feature, use branches with the ticket name. For example, if a developer is working on a ticket called ONTOUR-123, it will push a branch called ONTOUR-123 to Github.

If the ticket has multiple parts, a description can be added to the branch name, indicating what the changes include. i.e., a ticket that separates work into adding a configuration and displaying the data could be ONTOUR-123-configuration and ONTOUR-123-UI-changes, respectively.
