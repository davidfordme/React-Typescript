import '../../media/scss/views/UpcomingLaunches.scss';

import React, { useState, useEffect } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { useGlobalContext } from '../../Context';

const UpcomingLaunches = () => {

    const { isLoading, setLoading } = useGlobalContext();
    const [ launches, setLaunches ] = useState<[]>([]);

    const fetchLaunches = () => {
      setLoading(true)

      const client = new ApolloClient({
        uri: 'https://api.spacex.land/graphql/',
        cache: new InMemoryCache()
      });
        
      client
        .query({
          query: gql`
            query {
              launchesUpcoming(limit: 10) {
                mission_name
                rocket {
                  rocket {
                    id
                    name
                    wikipedia
                    type
                  }
                }
                mission_id
              }
            }
          
          `
        })
        .then(result => {
          const { data } = result;
          const { launchesUpcoming } = data;
          setLaunches(launchesUpcoming);  

          setTimeout(() => {
            setLoading(false);
          }, 2000); 
        });
    };

    useEffect(() => {
      if(launches.length === 0 && isLoading === false) fetchLaunches();
    });

    return(
        <div className="upcomingLaunches">
          <nav></nav>
        </div>
    )
}

export default UpcomingLaunches;