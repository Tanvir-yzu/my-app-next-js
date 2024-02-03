import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const Home = () => {
 // throw new Error();

  return (
    <div>
      <Link href="/blog"><button className="btn glass">Go to Blog</button></Link>
     <h1>This is home page</h1>
     <Counter/>
    
    </div>
  );
};

export default Home;