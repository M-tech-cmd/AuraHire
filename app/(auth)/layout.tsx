import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
    // Removed auth check - middleware handles this now
    return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;