import React from 'react';

// Build out the view for the top ten HackerNews stories here. 
// Each story should have a title, author, and score. 
// You may wish to refactor the existing component structure - that's fine.
const TopTen = ({stories}) => (
  <div>
  <h1> Top Ten Stories </h1>
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
        stories.slice(1,10).map(story =>(

        
      <tr k =  {story.id}>
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

export default TopTen;