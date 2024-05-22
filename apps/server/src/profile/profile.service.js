import prisma from '../helpers/prisma-client';

  export const createProfile = async (userId, phone, address) => {
    return await prisma.profile.create({
        data: {
            userId: userId,
            phone: phone,
            address: address,
        
        }
    });
};

export const fetchprofile = async(userId) => {
    return await prisma.profile.findUnique({
        where: {
            userId: userId
        }
    });
};

export const fetchProfileAddress = async(userId) => {
    return await prisma.profile.findUnique({
        where: {
            userId: userId
        },
        select: {
            address: true
        }
    });
};

export const updateProfile = async (userId, profile) => {
    return await prisma.profile.update({
        where: {
            userId: userId
        },
        data: profile
    });
};

