import axios from 'axios';
const API = axios.create({
  baseURL: 'http://localhost:5033',
});

export default {
  getItems: (url, setState) =>
    API.get(`${url}`)
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      }),

  getItemById: (url, setState) =>
    API.get(`${url}`).then((res) => {
      setState(res.data);
    }),
  createItem: (url, payload) => {
    API.post(`${url}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      withCredentials: true,
    });
  },
  editItem: (url, payload) => {
    API.put(`${url}`, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },

      withCredentials: true,
    });
  },

  deleteItem: (url) => {
    API.delete(`${url}`, { withCredentials: true });
  },

  tilmeldNewsLetter: (url, payload) => {
    API.post(`${url}`, payload)
      .then(() => {
        alert(`${payload.email} has been added to newsletter`);
      })
      .catch(() => {
        alert("We could'nt find a  email");
      });
  },
  getNewsLetter: (url, setstate) => {
    API.get(url, { withCredentials: true })
      .then((res) => {
        setstate(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  deleteSubscription: (url) => {
    API.delete(`${url}`)
      .then(() => {
        alert('Email subscription was canceled');
      })
      .catch(() => {
        alert("We could'nt find a subscription");
      });
  },
  createLogin: (url, payload, redirect) => {
    API.post(`${url}`, payload, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        alert(`${payload.email} has been registered`);
        redirect(true);
      })
      .catch(() => {
        alert(
          'Username or Email is already in use or password not complex enough'
        );
        redirect(false);
      });
  },

  postLogin: (url, payload, setUser) => {
    API.post(`${url}`, payload, { withCredentials: true })
      .then((res) => {
        setUser(res.data.bruger_id);
        alert("You've Succesfully Loggedin");
      })
      .catch((err) => {
        console.log(err.message);
        alert('Email or Password does not match');
      });
  },
  getLogout: (url) => {
    API.get(`${url}`, { withCredentials: true })
      .then(() => {})
      .catch((err) => {
        console.log(err.message);
      });
  },

  deleteUser: (url, setredirect) => {
    API.delete(`${url}`, { withCredentials: true })
      .then(() => {
        alert('User Deleted');
        localStorage.removeItem('user');
        setredirect(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  setUser: (url, setState) => {
    API.get(`${url}`, {
      withCredentials: true,
    })
      .then((res) => {
        setState(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  editUser: (url, payload) => {
    API.put(`${url}`, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      withCredentials: true,
    })
      .then(() => {
        alert("You've Succesfully Edited Your Profile");
      })
      .catch((err) => {
        alert('Something Went Wrong try Again');
      });
  },

  isLoggedIn: (url, setState) => {
    API.get(`${url}`, { withCredentials: true })
      .then(() => {
        setState(true);
      })
      .catch((err) => {
        setState(false);
        console.log(err.message);
      });
  },

  postComment: (url, payload) => {
    API.post(`${url}`, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      withCredentials: true,
    })
      .then(() => {
        alert('Comment has been added');
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  editComment: (url, payload) => {
    API.put(`${url}`, payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      withCredentials: true,
    })
      .then(() => {
        alert('Comment Edited');
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  postLike: (url) => {
    API.patch(`${url}`).catch((err) => {
      console.log(err.message);
    });
  },
  // postLike: (url, payload) => {
  //   API.post(`${url}`, payload, { withCredentials: true });
  // },
  DeleteComment: (url) => {
    API.delete(`${url}`, {
      withCredentials: true,
    }).catch((err) => {
      console.log(err.message);
    });
  },

  SendContact: (url, payload) => {
    API.post(`${url}`, payload, {
      headers: { 'Content-Type': 'application/json' },
    })
      .then(() => {
        alert('Message was send');
      })
      .catch(() => {
        alert('You missed something');
      });
  },

  getData: (url, setstate) => {
    API.get(url)
      .then((res) => {
        setstate(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  getDataCat: (url, setstate, setcategory) => {
    API.get(url)
      .then((res) => {
        setstate(res.data);
        setcategory(res.data.kategori);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },

  postData: (url, payload, setredirect) => {
    API.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
      .then(() => {
        alert('Post succressfully created');
        setredirect(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  postIng: (url, payload, setredirect) => {
    API.post(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
      .then(() => {
        alert('Post succressfully created');
        setredirect(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  },
  putData: (url, payload, setredirect) => {
    API.put(url, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      withCredentials: true,
    })
      .then(() => {
        alert('Post succressfully created');
        setredirect(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  },

  deleteData: (url) => {
    API.delete(url, {
      withCredentials: true,
    })
      .then(() => {
        alert('Post have succressfully been deleted');
      })
      .catch((err) => {
        alert(err.message);
      });
  },
};
