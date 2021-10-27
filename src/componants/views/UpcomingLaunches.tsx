import '../../media/scss/views/UpcomingLaunches.scss';

import React, { useState, useEffect } from 'react';

import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

import { useGlobalContext } from '../../Context';
import Launch from "../elements/Launch";

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
              launchesUpcoming(limit: 30) {
                id
                mission_name
                mission_id
                details
                rocket {
                  rocket {
                    id
                    name
                    wikipedia
                    type
                  }
                }
              }
            }
          `
        })
        .then(result => {
          
          const { data } = result;
          const { launchesUpcoming } = data;
          setLaunches(launchesUpcoming);

          console.log(launchesUpcoming);

          setTimeout(() => {
            setLoading(false);
          }, 2000); 
        });
    };

    useEffect(() => {
      if(launches.length === 0 && isLoading === false) fetchLaunches();
    });

    return(
        <section className="upcomingLaunches">
          <h2>Upcoming Launches</h2>
          { launches.length > 0 ? launches.map((object, i) => <Launch key={ i } data={ object } content_visible={ false } /> ) : '' }
        </section>
    )
}

export default UpcomingLaunches;