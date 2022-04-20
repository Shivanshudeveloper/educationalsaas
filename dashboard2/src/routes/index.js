import { useRoutes } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import OtherRoutes from "./OtherRoutes";
import InviteeRoutesMeeting from "./InviteeRoutesMeeting";
import ClassesMeet from "./ClassesMeet";

// ===========================|| ROUTING RENDER ||=========================== //

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, OtherRoutes, InviteeRoutesMeeting, ClassesMeet]);
}
