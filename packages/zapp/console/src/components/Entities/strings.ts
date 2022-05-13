import { createLocalizedString } from '@flyteconsole/locale';
import { startCase } from 'lodash';

const str = {
  allExecutionsChartTitle: 'All Executions in the Workflow',
  workflowVersionsTitle: 'Recent Workflow Versions',
  viewAll: 'View All',
  schedulesHeader: 'Schedules',
  collapseButton: (showAll: boolean) => (showAll ? 'Collapse' : 'Expand'),
  launchStrings: (typeString: string) => `Launch ${startCase(typeString)}`,
  noDescription: (typeString: string) => `This ${typeString} has no description.`,
  noSchedules: (typeString: string) => `This ${typeString} has no schedules.`,
};

export { patternKey } from '@flyteconsole/locale';
export default createLocalizedString(str);