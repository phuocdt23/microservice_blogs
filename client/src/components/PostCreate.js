const PostCreate = () => {
  return (<div>
    <form action="/" method="POST">
      <fieldset>
        <legend>
          <h1>Create Post</h1>
        </legend>
        <label for="title">Title</label><br></br>
        <input type="text" id="title" name="title"></input><br></br>
        <button type="submit">Submit</button><br></br>
      </fieldset>
    </form>
  </div>)
}

export default PostCreate;