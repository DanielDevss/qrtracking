import { Path } from "@/types/path";
import { BellRing, ChartLine, CircleUser, Home, Plug, Plus, QrCode, Settings, Star } from "lucide-react";

export const paths: Path[] = [
    {
        label: 'Navegación',
        childs: [
            {
                label: 'Escritorio', // Monitor principal
                icon: Home,
                to: '/'
            },
            {
                label: 'Códigos QR', // Códigos QR (CRUD)
                icon: QrCode,
                to: '/codigos-qr',
                action: {
                    icon: Plus,
                    to: '/codigos-qr/crear'
                }
            },
            {
                label: 'Reportes', // Descarga y visualización de información
                icon: ChartLine,
                to: '/reportes'
            }
        ]
    },
    {
        label: 'Ajustes',
        childs: [
            {
                label: 'Mi cuenta', // Ajustes de cuenta
                icon: CircleUser,
                to: '/mi-cuenta'
            },
            {
                label: 'Suscripcion', // Administrar suscripción
                icon: Star,
                to: '/ajustes/suscripcion'
            },
        ]
    },
];