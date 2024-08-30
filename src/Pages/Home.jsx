import React, { useState, useEffect } from "react";

import { Card, Loader, FormField } from "../components";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">Explore others Post</h1>
          <p className="mt-2 text-[#666e75] text-[14px] max-w[500px]"></p>
        </div>
      </section>
    </>
  );
};

export default Home;
