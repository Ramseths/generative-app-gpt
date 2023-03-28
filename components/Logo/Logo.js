import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Logo = () => {
    return (
        <div className="text-3xl text-center py-4">
            Generative-Math
            <FontAwesomeIcon icon={faLayerGroup} className="text-2xl"/>
        </div>
    );
};