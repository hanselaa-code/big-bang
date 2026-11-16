import {
  Atom,
  Clock,
  Compass,
  Expand,
  Eye,
  Flame,
  Globe,
  Layers,
  Orbit,
  Scale,
  Shield,
  Sparkles,
  Star,
  Sun,
  Telescope,
  Thermometer,
  Waves,
  Zap,
  type LucideProps,
} from 'lucide-react';
import type { TraitIconName } from '../data/bigBangData';

interface TraitIconProps extends LucideProps {
  name: TraitIconName;
}

export function TraitIcon({ name, ...props }: TraitIconProps) {
  switch (name) {
    case 'atom':
      return <Atom {...props} />;
    case 'flame':
      return <Flame {...props} />;
    case 'sun':
      return <Sun {...props} />;
    case 'orbit':
      return <Orbit {...props} />;
    case 'telescope':
      return <Telescope {...props} />;
    case 'waves':
      return <Waves {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'shield':
      return <Shield {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'compass':
      return <Compass {...props} />;
    case 'eye':
      return <Eye {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'scale':
      return <Scale {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'thermometer':
      return <Thermometer {...props} />;
    case 'expand':
      return <Expand {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'sparkles':
    default:
      return <Sparkles {...props} />;
  }
}
