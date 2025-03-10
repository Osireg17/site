'use client';
import { Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem } from '@nextui-org/react'
import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { auth } from '../lib/firebase'
import toast from 'react-hot-toast'
import { UserContext } from '../lib/context';

const UserAvatar = () => {
  const { user, username } = useContext(UserContext);

  return (
    <Dropdown placement="bottom-end">
        <DropdownTrigger>
        <Avatar
            showFallback // Show fallback avatar if src is not provided
            isBordered
            as="button"
            className="hidden sm:flex transition-transform"
            color="primary"
            name={user?.displayName ?? ''}
            size="sm"
            src={user?.photoURL ?? ''}
        />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2" href={`/users/${username}`}>
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings" href={`/users/${username}`}>My Profile</DropdownItem>
            <DropdownItem key="team_settings" href="/">My Dashboard</DropdownItem>
            <DropdownItem key="analytics" href="/">My Settings</DropdownItem>
            <DropdownItem key="logout" color="danger" 
                onClick={() => {
                    signOut(auth)
                    toast.success('Signed out successfully!');
                }
            }>
            Log Out
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}

export default UserAvatar