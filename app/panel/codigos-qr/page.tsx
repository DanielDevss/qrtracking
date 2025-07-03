import AppHeader from "@/components/panel/app-header";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default function QrCodes () {
    return (
        <>
            <AppHeader title="Listado de códigos">
                <Button asChild>
                    <Link href={'/panel/codigos-qr/crear'}>Nuevo código <Plus /></Link>
                </Button>
            </AppHeader>
        </>
    )
}