"use client";;
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
    predictButton,
    onChange,
    modelChangeToggle
}) => {
    const [active, setActive] = useState(propTabs[0]);
    const [tabs, setTabs] = useState(propTabs);

    const moveSelectedTabToTop = (idx) => {
        const newTabs = [...propTabs];
        const selectedTab = newTabs.splice(idx, 1);
        newTabs.unshift(selectedTab[0]);
        setTabs(newTabs);
        setActive(newTabs[0]);
    };

    const [hovering, setHovering] = useState(false);

    return (<>
        <div className="flex flex-row justify-between w-full items-center">
            <div
                className={cn(
                    "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full gap-2 bg-gradient-to-tl from-sky-300 to-blue-400 w-max p-2 rounded-full font-acorn",
                    containerClassName
                )}>
                {propTabs.map((tab, idx) => (
                    <button
                        key={tab.title}
                        onClick={() => {
                            moveSelectedTabToTop(idx);
                            onChange(tab.value);
                        }}
                        onMouseEnter={() => setHovering(true)}
                        onMouseLeave={() => setHovering(false)}
                        className={cn("relative px-3 py-1 rounded-full", tabClassName)}
                        style={{
                            transformStyle: "preserve-3d",
                        }}>
                        {active.value === tab.value && (
                            <motion.div
                                layoutId="clickedbutton"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                className={cn(
                                    "absolute inset-0 bg-blue-200 dark:bg-zinc-800 rounded-full ",
                                    activeTabClassName
                                )} />
                        )}

                        <span className="relative block text-neutral-800">
                            {tab.title}
                        </span>
                    </button>
                ))}
            </div>
            <div className="w-max mx-auto hidden sm:block">
                {modelChangeToggle}
            </div>
            {predictButton}
        </div>
        <FadeInDiv
            tabs={tabs}
            active={active}
            key={active.value}
            hovering={hovering}
            className={cn("mt-8", contentClassName)} />
    </>);
};

export const FadeInDiv = ({
    className,
    tabs,
    hovering
}) => {
    const isActive = (tab) => {
        return tab.value === tabs[0].value;
    };
    return (
        (<div className="relative w-full h-full">
            {tabs.map((tab, idx) => (
                <motion.div
                    key={tab.value}
                    layoutId={tab.value}
                    style={{
                        scale: 1 - idx * 0.1,
                        top: hovering ? idx * -50 : 0,
                        zIndex: -idx,
                        opacity: idx < 3 ? 1 - idx * 0.1 : 0,
                    }}
                    animate={{
                        y: isActive(tab) ? [0, 40, 0] : 0,
                    }}
                    className={cn("w-full h-full absolute top-0 left-0", className)}>
                    {tab.content}
                </motion.div>
            ))}
        </div>)
    );
};
