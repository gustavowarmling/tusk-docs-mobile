import { HomeIcon, ProfileIcon, TicketsIcon } from '../../assets/icons';

const getLabel = (options, route) => {
  if (options.tabBarLabel !== undefined) {
    return options.tabBarLabel;
  }

  if (options.title !== undefined) {
    return options.title;
  }

  return route.name;
};

const getIcon = label => {
  if (label === 'INÍCIO') {
    return HomeIcon;
  }

  if (label === 'COMPRAR PASSAGENS') {
    return TicketsIcon;
  }

  return ProfileIcon;
};

export default { getLabel, getIcon };
