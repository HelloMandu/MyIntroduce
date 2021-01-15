import './ConsoleInfo.scss';

function Console() {
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
                <span className="cli info"></span>
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
                <span className="cli info"></span>
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
                <span className="cli info"></span>
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
                <span className="underbar">
                    <span className="cli">__</span>
                </span>
            </li>
        </ul>
    );
}

export default Console;
