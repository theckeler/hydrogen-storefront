import {Icons} from '@/components/Icons';
import {IconText} from '@/components/IconText';

export function CloseAside({className, svg = true, handleMenuClose}) {
  // console.log('handleMenuClose', handleMenuClose);

  return (
    <button
      className={className}
      onClick={() => {
        //console.log('close');
        handleMenuClose();

        // var history = window.history;
        // history.go(-1);
        // // history.go(-1);
        // window.location.hash = '';
      }}
    >
      {svg && (
        <>
          <Icons icon="close" />
          <IconText text="Close" className="" />
        </>
      )}
    </button>
  );
}
