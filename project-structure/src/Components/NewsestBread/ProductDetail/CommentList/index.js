import React, { useState } from 'react';
import API from '../../../../API';

const CommentList = ({ currentComments, setReload, ifUser, produktid }) => {
  const [edit, setEdit] = useState(false);
  const [comment, setComment] = useState({ kommentaren: '' });

  const { kommentaren } = comment;

  const onDelete = (id) => {
    API.DeleteComment(`/kommentar/admin/${id}`);
    setReload(true);
  };
  const EditComment = (state, data, id) => {
    setEdit(state);
    // eslint-disable-next-line
    setComment({ ['kommentaren']: data });
  };
  const commitEdit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (var k in comment) {
      formData.append(k, comment[k]);
    }

    try {
      const res = API.editComment(`/kommentar/admin/${edit}`, formData);
      setEdit(false);
      setReload(true);
      return res;
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <>
      {currentComments
        ? currentComments.map((item) => {
            const options = {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            };

            let date = new Date(item.oprettet.split(' '));
            let dateArr = date.toLocaleDateString(undefined, options);
            let dateSplit = dateArr.split(' ');
            let dateTime = dateSplit[3].split('.');
            return (
              <div className="comment-post" key={item._id}>
                <h3>{item.bruger.fornavn + ' ' + item.bruger.efternavn}</h3>
                <p className="time-stamp">
                  {dateSplit[0] +
                    ' ' +
                    dateSplit[1] +
                    ' ' +
                    'kl ' +
                    dateTime[0] +
                    ':' +
                    dateTime[1] +
                    ' ' +
                    dateSplit[2]}
                </p>
                <p className="comment-text">{item.kommentaren}</p>
                {edit === item._id ? (
                  <form
                    onSubmit={commitEdit}
                    className="edit-comment-container"
                  >
                    {kommentaren !== '' ? (
                      <input
                        className="edit-input-field"
                        type="text"
                        name="kommentaren"
                        value={kommentaren}
                        onChange={(e) => {
                          setComment({ [e.target.name]: e.target.value });
                        }}
                        aria-label="kommentar"
                      />
                    ) : null}
                    <button type="submit" className="buttons ">
                      Commit Edit{' '}
                    </button>
                  </form>
                ) : null}
                {ifUser === item.bruger._id ? (
                  <div className="user-options">
                    <button
                      className="buttons delete"
                      onClick={() => onDelete(item._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="buttons"
                      onClick={() => EditComment(item._id, item.kommentaren)}
                    >
                      Edit
                    </button>
                  </div>
                ) : null}
              </div>
            );
          })
        : null}
    </>
  );
};

export default CommentList;
