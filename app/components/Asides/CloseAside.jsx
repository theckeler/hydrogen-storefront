import {Icons} from '@/components/Icons';
import {IconText} from '@/components/IconText';

export function CloseAside({className, svg = true}) {
  return (
    <button
      className={className}
      onClick={() => {
        const history = window.history;
        history.go(-1);
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
