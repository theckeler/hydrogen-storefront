import {Icons} from '@/components/Icons';
import {IconText} from '@/components/IconText';

export function CloseAside({className, svg = true}) {
  return (
    <button
      className={className}
      onClick={() => {
        var history = window.history;
        history.go(-1);
        // history.go(-1);
        window.location.hash = '';
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
