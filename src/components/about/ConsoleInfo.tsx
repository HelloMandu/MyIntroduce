import { useState } from 'react';
import cn from 'classnames';
import useInterval from '../../hooks/useInterval';
import './ConsoleInfo.scss';

interface ConsoleInfoProps{
    name: string,
    birth: string,
    university: string,
}

function ConsoleInfo({name, birth, university}: ConsoleInfoProps) {
    const [underbarHidden, setUnderbarHidden] = useState<boolean>(false);
    useInterval(() => setUnderbarHidden(state => !state), 500);
    return (
        <ul className="console-list">
            <li className="console">
                <span>Console</span>
            </li>
            <li className="console-item">
                <i className="fa fa-angle-right"></i>
                <span className="cli declare">const</span> sungmin = <span className="declare">new</span> Developer();
            </li>
            <li className="console-item response undefined">
                <i className="fa fa-angle-left"></i>
                <span className="cli">undefined</span>
            </li>
            <li className="console-item">
                <i className="fa fa-angle-right"></i>
                <span className="cli">
                    sungmin.<span className="method">getName</span>();
                </span>
            </li>
            <li className="console-item response">
                <i className="fa fa-angle-left"></i>
                <span className="cli info">{name}</span>
            </li>
            <li className="console-item">
                <i className="fa fa-angle-right"></i>
                <span className="cli">
                    {' '}
                    sungmin.<span className="method">getDate</span>();
                </span>
            </li>
            <li className="console-item response">
                <i className="fa fa-angle-left"></i>
                <span className="cli info">{birth}</span>
            </li>
            <li className="console-item">
                <i className="fa fa-angle-right"></i>
                <span className="cli">
                    {' '}
                    sungmin.<span className="method">getUniversity</span>();
                </span>
            </li>
            <li className="console-item response">
                <i className="fa fa-angle-left"></i>
                <span className="cli info">{university}</span>
            </li>
            <li className="console-item">
                <i className="fa fa-angle-right"></i>
                <span className="cli">
                    {' '}
                    sungmin.<span className="method">getCompany</span>();
                </span>
            </li>
            <li className="console-item response undefined">
                <i className="fa fa-angle-left"></i>
                <span className="cli">undefined</span>
            </li>
            <li className="console-item ">
                <i className="fa fa-angle-right"></i>
                <span className={cn("underbar", {hidden: underbarHidden})}>
                    <span className="cli">__</span>
                </span>
            </li>
        </ul>
    );
}

export default ConsoleInfo;
