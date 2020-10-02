import React from 'react';
import API from '../../../../API';

const PostComment = ({
  produktid,
  setReload,
  setPayload,
  kommentaren,
  payload,
}) => {
  const handleChange = (e) => {
    setPayload({
      [e.target.name]: e.target.value,
      bruger: JSON.parse(localStorage.getItem('user')),
      produkt: produktid,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (var k in payload) {
      formData.append(k, payload[k]);
    }
    try {
      const res = API.postComment('/kommentar/admin', formData);
      setReload(true);
      setPayload({ kommentaren: '' });

      return res;
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="input-comment-container">
      <div className="input-container">
        <i className="fas fa-pencil-alt"></i>
        <input
          type="text"
          name="kommentaren"
          aria-label="kommentaren"
          value={kommentaren}
          placeholder="fortæl os hvad du synes....."
          onChange={handleChange}
        />
      </div>
      <button type="submit">Indsæt</button>
    </form>
  );
};

export default PostComment;
