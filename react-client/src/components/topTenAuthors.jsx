import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopAuthors = ({author}) => (
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
        author.sort((x,y) => x.karma - y.karma).slice(1,10).map(author =>(

        
      <tr k =  {author.id}>
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