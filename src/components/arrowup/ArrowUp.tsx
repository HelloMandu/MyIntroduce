import cn from 'classnames';
import { useCallback } from 'react';
import { scrolltoLink } from '../../lib/scroll';
import SectionList from '../../static/data/sections.json';

import './ArrowUp.scss';

interface ArrowUpProps {
    activeArrow: boolean;
}

function ArrowUp({ activeArrow }: ArrowUpProps) {
    const handleArrowUp = useCallback(() => scrolltoLink(SectionList[0].toLocaleLowerCase()), []);
    return (
        <div className={cn('arrow-up', { activeArrow })} onClick={handleArrowUp}>
            <i className="fa fa-angle-double-up"></i>
        </div>
    );
}

export default ArrowUp;
