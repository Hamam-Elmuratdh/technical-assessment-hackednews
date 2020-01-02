import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopAuthors = ({authors}) => (
  <div>
  <h1> Top Ten Authors </h1>
  <table>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {
        authors.slice(stories.length  - 10, stories.length).map(authors =>(

        
      <tr k =  {authors.id}>
        <td>{story.tittle}</td>
        <td>{story.author}</td>
        <td>{story.score}</td>
      </tr>
        ))
        }
    </tbody>
  </table>
</div>
);

export default TopAuthors;