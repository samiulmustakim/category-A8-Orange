import React from 'react';

const ProfilePage = () => {
    const { data: userData } = authClient.useSession();
    const user = userData?.user;
    
    return (
        <div>
            
        </div>
    );
};

export default ProfilePage;