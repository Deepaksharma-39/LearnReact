import { useState, useEffect } from "react";
import axios from "axios"; // Import Axios here

function Post() {
  const [loading, setLoading] = useState(false);
  const [posts, setPost] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    handleFetchData(page);
  }, [page]);

  const handleFetchData = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const data = response.data;
      console.log(data);
      setPost(data);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }
  };

  console.log(posts);

  const handlePageChange = (changeBy) => setPage(page + changeBy);

  if (loading) {
    return <h3>Loading</h3>;
  }

  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {posts.map((item) => (
          <li key={item.id}>
            {item.id} {item.title}
          </li>
        ))}
      </ul>
      <button onClick={() => handlePageChange(-1)} disabled={page === 1}>
        Prev
      </button>
      <button>{page}</button>
      <button onClick={() => handlePageChange(1)} disabled={page === 10}>
        Next
      </button>
    </div>
  );
}

export default Post;
