import { logUserOut } from '../apollo';
const Home = () => {
  return (
    <div>
      <h1>Welcome!</h1>
      <button
        onClick={() => {
          logUserOut();
        }}
      >
        Log out now!
      </button>
    </div>
  );
};
export default Home;
