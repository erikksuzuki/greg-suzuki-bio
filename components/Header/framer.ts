import { Variants } from 'framer-motion'

const overlayVariant: Variants = {
  show: {
    height: '100vh',
    transition: {
      when: 'beforeChildren',
      ease: [0.925, 0.14, 0.25, 0.915],
      duration: 0.5,
    },
  },
  hidden: {
    height: 0,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: 'afterChildren',
    },
  },
}

const overlayNavVariant: Variants = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
  },
}

const navWrapper: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const navItem: Variants = {
  hidden: {
    y: 10,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
  },
}

const inviteReqVariant: Variants = {
  open: { opacity: 0 },
  closed: {
    opacity: 1,
    transition: {
      delay: 0.2,
    },
  },
  exit: { opacity: 0 },
}

const backdropVariant: Variants = {
  open: { opacity: 0.9 },
  closed: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      delay: 0.6,
    },
  },
}

const drawerVariant: Variants = {
  open: {
    right: 0,
  },
  closed: {
    right: '-100%',
  },
  exit: {
    right: '-100%',
    transition: {
      duration: 0.3,
    },
  },
}

export {
  overlayVariant,
  overlayNavVariant,
  navWrapper, navItem,
  inviteReqVariant,
  backdropVariant,
  drawerVariant
}
