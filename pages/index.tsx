import { GetServerSideProps } from "next";
import { useDispatch, useSelector } from "../app/hooks";
import { wrapper } from "../app/store";

const IndexPage = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();
  return (<>
    {counters}
    <button onClick={() => {
      dispatch({ type: 'INCREMENT' });
    }}>INCREMENT</button>
  </>);
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(({ store }) => {
  store.dispatch({ type: "INCREMENT" });
  return {
    props: {}
  }
});

export default IndexPage;