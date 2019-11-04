import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { PeakfijnPage } from 'src/organisms/peakfijn';

const AppNavigator = createStackNavigator(
	{ PeakfijnPage },
	{ defaultNavigationOptions: { header: null } },
);

export const NavigationProvider = createAppContainer(AppNavigator);
