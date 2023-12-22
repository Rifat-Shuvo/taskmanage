
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../providers/Authentication';


const useAll = () => {
    const {user} = useContext(AuthContext)
   const {data: all = [], isLoading, refetch} = useQuery({
    queryKey: ['alldata'],
    queryFn: async ()=>{
     const res = await axios.get(`https://server-task-three.vercel.app/all/${user.email}`)
      return res.data
    }
   })
   return [all, isLoading, refetch]
};

export default useAll;