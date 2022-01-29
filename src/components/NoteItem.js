import React from "react";

function NoteItem(props) {
  const { note } = props;
  return (
    <div className="noteCard">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title"> {note.title}</h5>
          <p class="card-text">
            {note.description}
            Cards are built with as little markup and styles as possible, but
            still manage to deliver a ton of control and customization.This is
            easily customized with our various
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default NoteItem;
