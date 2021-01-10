
import { Provider } from "react-redux";
import store from "../store/store";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
const makestore = () => store;
const wrapper = createWrapper(makestore)
export default wrapper.withRedux(MyApp)
