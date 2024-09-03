import React, { useState, useEffect } from "react";

import { Card, Loader, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          Explore others Post
        </h1>
      </div>
    </section>
  );
};

export default Home;
