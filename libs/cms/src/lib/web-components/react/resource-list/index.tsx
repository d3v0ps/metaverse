// import { styleCollector, useStyles } from 'trousers';

// const ResourceListStyles = styleCollector('div').element`
//     `.modifier('layout-', props => !!props.primary)`
//         // A modifier for the primary variant
//         color: black;
//     `.modifier('secondary', props => !!props.secondary)`
//         color: blue;
//     `.modifier('subtle', props => !!props.subtle)`
//         color: blue;
//     `;


export const ResourceListFilters = ({ filters }: Pick<Props, 'filters'>) => <>Resource List Filters</>

export const ResourceListHeader = ({ resources, filters }: Props) => <>Resource List Header</>

export const ResourceList = ({ resources, filters }: Props) => <section >
  <ResourceListFilters filters={filters}></ResourceListFilters>
</section>

export type Props = {
  resources: any[];
  filters: any;
};

export default ResourceList;
