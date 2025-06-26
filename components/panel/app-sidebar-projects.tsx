import { ChevronsUpDown, Layers, Plus, Settings2, Shredder, SquarePen } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Link from "next/link";
import { Button } from "../ui/button";

export default function AppSidebarProjects () {
    return (
        <header>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="flex items-center justify-between p-1 hover:bg-sidebar-accent rounded cursor-default">
                        <div className="flex items-center space-x-2">
                            <div className="bg-accent-foreground p-2 rounded text-accent">
                                <Layers size={16} />
                            </div>
                            <div>
                                <h3 className="text-sm">LP Porte</h3>
                                <p className="text-xs">Proyecto</p>
                            </div>
                        </div>
                        <div>
                            <ChevronsUpDown size={18} />
                        </div>
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-56" side="right" align="start">
                    <DropdownMenuLabel><Layers className="inline" size={16} /> Proyectos</DropdownMenuLabel>
                    {/* Lista de proyectos */}
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup value="lpporte">
                        <DropdownMenuRadioItem value="lpporte">
                            LP Porte
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="complementi">
                            Complementi
                        </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    {/* Crear nuevo proyecto */}
                    <DropdownMenuSeparator />
                    <DropdownMenuLabel><Settings2 className="inline" size={16} /> Opciones</DropdownMenuLabel>
                    <DropdownMenuItem asChild>
                        <Link className="w-full justify-between" href={'/nuevo-proyecto'}>Nuevo proyecto <Plus /></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                        <Link className="w-full justify-between" href={'/editar-proyecto'}>Editar proyecto actual <SquarePen /></Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="w-full justify-between">
                        Eliminar proyecto actual <Shredder />
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}