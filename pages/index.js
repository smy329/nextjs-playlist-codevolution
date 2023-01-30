import Link from 'next/link';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  const handleClick = () => {
    console.log('Placeing your order');
    router.push('/product');
  };
  return (
    <div>
      <h1>Home PAge</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/product">Products</Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}

export default Home;
