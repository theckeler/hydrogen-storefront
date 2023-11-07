import {Aside} from '~/components/Asides';
import Login from '~/routes/($locale).account_.login';

export function AccountAside({className, handleMenuClose}) {
  return (
    <Aside
      id="account"
      heading="ACCOUNT"
      handleMenuClose={handleMenuClose}
      className={className}
    >
      <Login />
    </Aside>
  );
}
