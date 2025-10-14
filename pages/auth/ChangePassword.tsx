
import React from 'react';

const ChangePassword = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Change Password</h2>
            <div className="bg-white p-6 rounded-lg shadow-sm max-w-lg">
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium">Current Password</label>
                        <input type="password" className="w-full p-2 border rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">New Password</label>
                        <input type="password" className="w-full p-2 border rounded-lg mt-1"/>
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Confirm New Password</label>
                        <input type="password" className="w-full p-2 border rounded-lg mt-1"/>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="px-4 py-2 bg-brand-purple text-white rounded-lg">Update Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePassword;
