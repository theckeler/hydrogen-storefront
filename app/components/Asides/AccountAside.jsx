import {Aside} from '~/components/Asides';
import Login from '~/routes/($locale).account_.login';

export function AccountAside() {
  return (
    <Aside id="account-aside" heading="ACCOUNT">
      <Login />
    </Aside>
  );
}
